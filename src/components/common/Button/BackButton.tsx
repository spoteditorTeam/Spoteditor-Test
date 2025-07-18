'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from '../Icons';

interface BackButtonProps {
  circle?: boolean;
  plain?: boolean;
}

const BackButton = ({ circle, plain }: BackButtonProps) => {
  const router = useRouter();
  const handleClick = () => router.back();
  return (
    <>
      {plain ? (
        <button onClick={handleClick} className={cn(circle && 'rounded-full bg-white')}>
          <ArrowLeftIcon />
        </button>
      ) : (
        <Button
          variant={'ghost'}
          size={'icon'}
          onClick={handleClick}
          className={cn(circle && 'rounded-full bg-white')}
        >
          <ArrowLeftIcon />
        </Button>
      )}
    </>
  );
};

export default BackButton;
