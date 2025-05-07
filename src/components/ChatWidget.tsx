
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, X, Send } from 'lucide-react';

// Predefined questions and answers
const predefinedQA = [
  {
    question: "How do I sell my license?",
    answer: "To sell your license, simply fill out our contact form with your license details, and our team will get back to you with a valuation within 24 hours. Once you accept our offer, we'll handle the entire transfer process."
  },
  {
    question: "What types of software licenses do you buy?",
    answer: "We purchase a wide range of software licenses including enterprise software, design tools, development tools, and productivity applications. We specialize in Adobe, Microsoft, Autodesk, and many other popular software providers."
  },
  {
    question: "How much can I get for my license?",
    answer: "License values vary based on the software type, remaining subscription time, and current market demand. On average, our clients receive 30-70% of the original purchase price. For a precise valuation, please submit your license details."
  },
  {
    question: "How long does the process take?",
    answer: "Our process is designed to be quick and efficient. You'll typically receive a valuation within 24 hours, and once accepted, payment can be processed within 1-3 business days. The entire license transfer is usually completed within a week."
  }
];

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hi there! 👋 I'm SoftSell Assistant. How can I help you today?" },
    { sender: 'bot', text: "You can ask me about selling your software licenses or check out these common questions:" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Find if there's a matching predefined question
    const lowerInput = input.toLowerCase();
    const matchedQA = predefinedQA.find(qa => 
      qa.question.toLowerCase().includes(lowerInput) || 
      lowerInput.includes(qa.question.toLowerCase().split(' ').slice(1).join(' '))
    );
    
    // Simulate response delay
    setTimeout(() => {
      setIsTyping(false);
      if (matchedQA) {
        setMessages(prev => [...prev, { sender: 'bot', text: matchedQA.answer }]);
      } else {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: "Thanks for your question! To provide you with the most accurate information, our team would like to assist you directly. Please fill out our contact form, and we'll get back to you promptly." 
        }]);
      }
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: question }]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Find the matching predefined answer
    const matchedQA = predefinedQA.find(qa => qa.question === question);
    
    // Simulate response delay
    setTimeout(() => {
      setIsTyping(false);
      if (matchedQA) {
        setMessages(prev => [...prev, { sender: 'bot', text: matchedQA.answer }]);
      }
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all z-50 bg-softsell-purple hover:bg-softsell-purple-dark text-white ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-0 right-0 w-full sm:w-96 bg-white dark:bg-softsell-dark-gray rounded-t-lg sm:rounded-lg shadow-xl transition-all duration-300 z-50 flex flex-col ${isOpen ? 'max-h-[500px] sm:max-h-[500px] sm:bottom-6 sm:right-6' : 'max-h-0 overflow-hidden'}`}>
        {/* Chat Header */}
        <div className="p-4 bg-softsell-purple text-white rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            <h3 className="font-medium">SoftSell Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-softsell-light-gray">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-4 flex-grow overflow-y-auto flex flex-col space-y-4 max-h-96">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-softsell-purple text-white rounded-tr-none' 
                    : 'bg-softsell-light-gray dark:bg-gray-700 text-foreground rounded-tl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Quick question suggestions after initial messages */}
          {messages.length === 2 && (
            <div className="flex flex-col space-y-2">
              {predefinedQA.map((qa, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(qa.question)}
                  className="text-left p-2 bg-white dark:bg-gray-700 border border-softsell-purple dark:border-gray-600 rounded-md hover:bg-softsell-light-gray dark:hover:bg-gray-600 transition-colors"
                >
                  {qa.question}
                </button>
              ))}
            </div>
          )}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-softsell-light-gray dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow"
          />
          <Button 
            onClick={handleSend} 
            className="ml-2 bg-softsell-purple hover:bg-softsell-purple-dark text-white"
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
