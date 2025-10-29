"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BetaRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/?utm_source=linkedin&utm_medium=profile&utm_campaign=beta-entry');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center">
      <p className="text-gray-600">Redirecting...</p>
    </div>
  );
}

