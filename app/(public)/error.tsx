"use client"

export default function Error() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        خطا رخ داده است. لطفاً بعداً دوباره امتحان کنید.
        <button>تلاش دوباره</button>
      </div>
    </div>
  );
}
