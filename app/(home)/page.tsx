import { buttonVariants } from 'fumadocs-ui/components/button';
import { MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Fumadocs</h1>
      <p className="mb-8 max-w-xl text-lg text-fd-muted-foreground">
        This is an example site built with Fumadocs. You can use this as a
        starting point to build your own documentation.
      </p>
      <Link
        href="/docs"
        className={buttonVariants({
          className: 'group',
        })}
      >
        Get Started{' '}
        <MoveRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </main>
  );
}
