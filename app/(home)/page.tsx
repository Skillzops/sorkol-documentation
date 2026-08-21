import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-3xl font-bold mb-4">SORKOL CRM Documentation</h1>
      <p className="text-fd-muted-foreground">
        Practical guides for configuring and operating SORKOL CRM. Open{' '}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{' '}
        to get started.
      </p>
    </div>
  );
}
