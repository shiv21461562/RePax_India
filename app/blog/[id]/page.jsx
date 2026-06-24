import Image from "next/image";
import Link from "next/link";
import { getBlogById } from "@/app/services/BlogApi";

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;

  const response = await getBlogById(id);

  const blog = response?.data;

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Blog Not Found
          </h1>
          <p className="mt-3 text-slate-500">
            The article you are looking for does not exist.
          </p>

          <Link
            href="/blog"
            className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 text-white"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
   <section className="relative overflow-hidden bg-gradient-to-br from-[#0B3D5C] via-[#174d6d] to-[#1f6f9d] py-32">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_30%)]" />

  <div className="relative mx-auto max-w-7xl px-6">
    
    <Link
      href="/blog"
      className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-md hover:bg-white/20"
    >
      ← Back to Blogs
    </Link>

    <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
      <span className="font-medium text-orange-300">
        {blog.category}
      </span>
    </div>

    <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-5xl">
      {blog.title}
    </h1>

    <div className="mt-8 flex flex-wrap gap-6 text-white/80">
      <span>✍️ {blog.author}</span>

      <span>
        📅{" "}
        {new Date(blog.created_at).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    </div>

    <p className="mt-10 max-w-4xl text-xl leading-9 text-slate-200">
      {blog.short_description}
    </p>
  </div>
</section>

      {/* Article Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Summary Box */}
          <div className="mb-12 rounded-3xl border-l-4 border-orange-500 bg-orange-50 p-8 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-orange-600">
              Article Summary
            </h3>

            <p className="text-lg leading-8 text-slate-700">
              {blog.short_description}
            </p>
          </div>

          {/* Content */}
          <article className="rounded-3xl bg-white p-2">
            <div className="whitespace-pre-line text-lg leading-10 text-slate-700">
              {blog.content}
            </div>
          </article>

          {/* Author Box */}
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              About the Author
            </h3>

            <p className="mt-3 text-slate-600">
              {blog.author} contributes insights, industry analysis and
              thought leadership content for REPAX India, covering innovation,
              technology, retail transformation and emerging business trends.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Explore More Industry Insights
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Stay updated with the latest trends, innovation stories, market
            insights and conference highlights from REPAX India.
          </p>

          <div className="mt-8">
            <Link
              href="/blog"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}