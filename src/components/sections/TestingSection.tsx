import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import CodeBlock from '@/components/ui/CodeBlock';

const testingCode = `import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

jest.mock('../api/auth', () => ({
  login: jest.fn()
}));
import { login } from '../api/auth';

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders email and password fields', () => {
    render(<LoginForm />);
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('shows validation error on empty submit', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });

  it('calls login API with correct credentials', async () => {
    const user = userEvent.setup();
    (login as jest.Mock).mockResolvedValueOnce({ token: 'abc123' });
    
    render(<LoginForm />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });

  it('shows loading state during API call', async () => {
    const user = userEvent.setup();
    (login as jest.Mock).mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 1000))
    );
    
    render(<LoginForm />);
    await user.click(screen.getByRole('button'));
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});`;

export default function TestingSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="11"
        title="Testing — Jest, RTL, Cypress"
        titleBn="Code এর quality নিশ্চিত করা — Senior এর signature skill"
        icon="🧪"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="Testing Pyramid — কোন test কতটুকু?"
          contentBn="Unit Tests (70%): Individual function বা component test করা। Jest দিয়ে। Integration Tests (20%): Multiple components একসাথে test করা। React Testing Library দিয়ে। E2E Tests (10%): Browser এ পুরো flow test করা। Cypress বা Playwright দিয়ে।"
          titleEn="Testing Pyramid — How much of each test?"
          contentEn="The Testing Pyramid guides how much of each test type to write. Unit tests are fast and numerous; integration tests verify component cooperation; E2E tests verify user journeys. React Testing Library's philosophy: test behavior, not implementation."
          tag="Quality"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="component.test.tsx"
          language="Jest + React Testing Library"
          code={testingCode}
        />
      </div>
    </div>
  );
}
