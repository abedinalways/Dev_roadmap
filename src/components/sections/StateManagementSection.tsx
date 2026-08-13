import SectionHeader from '@/components/sections/SectionHeader';
import CodeBlock from '@/components/ui/CodeBlock';
import Card from '@/components/ui/Card';

const stateManagementData = [
  {
    tool: 'useState + Context',
    bestFor: 'Small apps, simple global state (theme, auth)',
    bestForBn: 'ছোট app এ যথেষ্ট',
    difficulty: 'Easy',
  },
  {
    tool: 'Zustand',
    bestFor: 'Mid-size apps, simple API, no boilerplate',
    bestForBn: 'Simple ও powerful — বেশিরভাগ project এ ideal',
    difficulty: 'Medium',
  },
  {
    tool: 'Redux Toolkit',
    bestFor: 'Large enterprise apps, complex state logic',
    bestForBn: 'Complex app, team project, predictable state',
    difficulty: 'Hard',
  },
  {
    tool: 'React Query/TanStack',
    bestFor: 'Server state (fetching, caching, syncing)',
    bestForBn: 'API data manage করার জন্য best tool',
    difficulty: 'Medium',
  },
  {
    tool: 'Jotai/Recoil',
    bestFor: 'Atomic state, fine-grained updates',
    bestForBn: 'Atomic approach, performance critical apps',
    difficulty: 'Medium',
  },
];

const zustandCode = `// ZUSTAND — Simple, Powerful State Management
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        total: 0,
        
        addItem: (item) => set((state) => {
          const newItems = [...state.items, item];
          return {
            items: newItems,
            total: newItems.reduce((sum, i) => sum + i.price, 0)
          };
        }),

        removeItem: (id) => set((state) => {
          const newItems = state.items.filter(i => i.id !== id);
          return { items: newItems, total: newItems.reduce((s, i) => s + i.price, 0) };
        }),

        clearCart: () => set({ items: [], total: 0 }),
      }),
      { name: 'cart-storage' }
    )
  )
);

// Component এ ব্যবহার:
function CartIcon() {
  const { items, total } = useCartStore();
  return <div>{items.length} items — ৳{total}</div>;
}`;

export default function StateManagementSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="07"
        title="State Management"
        titleBn="Context, Zustand, Redux — সঠিক tool বেছে নেওয়া"
        icon="🗄️"
      />

      <Card className="mb-8 overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tool</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Best For</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">বাংলায়</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Learning</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stateManagementData.map((item) => (
              <tr key={item.tool} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{item.tool}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.bestFor}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.bestForBn}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    item.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {item.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Card>

      <div className="mb-8">
        <CodeBlock
          title="zustand-store.ts"
          language="Zustand"
          code={zustandCode}
        />
      </div>
    </div>
  );
}
