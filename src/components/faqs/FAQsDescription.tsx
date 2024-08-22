import Link from "next/link";

export default function FAQsDescription() {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
      <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
      <p className="mt-2 text-lg text-gray-400">
        If you have anything else you want to ask,
        <Link
          href="mailto:info@example.com"
          className="ml-2 text-gray-900 underline"
        >
          reach out to us
        </Link>
      </p>
    </div>
  );
}
