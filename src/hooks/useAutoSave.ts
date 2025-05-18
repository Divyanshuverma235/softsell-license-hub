
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useAutoSave<T>(data: T, saveCallback: (data: T) => Promise<void>, delay: number = 5000): void {
  const { toast } = useToast();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSavedRef = useRef<string>(JSON.stringify(data));
  
  useEffect(() => {
    const hasChanged = JSON.stringify(data) !== lastSavedRef.current;
    
    if (!hasChanged) return;
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(async () => {
      try {
        await saveCallback(data);
        lastSavedRef.current = JSON.stringify(data);
        toast({
          title: "Draft auto-saved",
          description: "Your changes have been saved automatically",
          duration: 3000,
        });
      } catch (error) {
        toast({
          title: "Auto-save failed",
          description: "We couldn't save your draft automatically",
          variant: "destructive",
          duration: 5000,
        });
      }
    }, delay);
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [data, saveCallback, delay, toast]);
}
