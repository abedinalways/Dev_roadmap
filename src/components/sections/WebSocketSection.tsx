import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import CodeBlock from '@/components/ui/CodeBlock';

const websocketCode = `// PRODUCTION-GRADE useWebSocket HOOK
import { useEffect, useRef, useState, useCallback } from 'react';

type WSStatus = 'connecting' | 'connected' | 'disconnected' | 'error';

interface UseWebSocketOptions {
  onMessage?: (data: unknown) => void;
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
}

function useWebSocket(url: string, options: UseWebSocketOptions = {}) {
  const { onMessage, reconnectInterval = 3000, maxReconnectAttempts = 5 } = options;
  const wsRef = useRef<WebSocket | null>(null);
  const [status, setStatus] = useState<WSStatus>('disconnected');
  const reconnectCount = useRef(0);

  const connect = useCallback(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;
    setStatus('connecting');

    ws.onopen = () => {
      setStatus('connected');
      reconnectCount.current = 0;
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onMessage?.(data);
      } catch {
        onMessage?.(event.data);
      }
    };

    ws.onerror = () => setStatus('error');

    ws.onclose = () => {
      setStatus('disconnected');
      if (reconnectCount.current < maxReconnectAttempts) {
        setTimeout(() => {
          reconnectCount.current++;
          connect();
        }, reconnectInterval * Math.pow(2, reconnectCount.current));
      }
    };
  }, [url, onMessage, reconnectInterval, maxReconnectAttempts]);

  useEffect(() => {
    connect();
    return () => wsRef.current?.close();
  }, [connect]);

  const send = useCallback((data: unknown) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(data));
    }
  }, []);

  return { status, send };
}

// Chat Component
function ChatRoom({ roomId }: { roomId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);

  const { status, send } = useWebSocket(
    \`wss://api.example.com/chat/\${roomId}\`,
    {
      onMessage: (data) => setMessages(prev => [...prev, data as Message])
    }
  );

  const sendMessage = (text: string) => send({ type: 'message', text });
}`;

export default function WebSocketSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="09"
        title="WebSocket & Real-time Communication"
        titleBn="Real-time features বানানো — Chat, Live Updates, Collaboration"
        icon="🔌"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="WebSocket vs HTTP — কখন কোনটা?"
          contentBn="HTTP: Request-Response pattern। Client request করে, server response দেয়। WebSocket: Full-duplex, persistent connection। Server ও client যেকোনো সময় data পাঠাতে পারে। Chat apps, live notifications, collaborative tools এর জন্য।"
          titleEn="WebSocket vs HTTP — When to use which?"
          contentEn="HTTP: Stateless request/response. Good for CRUD operations. WebSocket: Persistent bidirectional connection. Essential for real-time features. SSE: Server-to-client streaming only. Great for live feeds and AI streaming responses."
          tag="Architecture"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="websocket-hook.tsx"
          language="WebSocket + React"
          code={websocketCode}
        />
      </div>
    </div>
  );
}
