import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/app/services/BlogApi";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "REPAX Blog | Retail Industry News, Insights & Trends",

  description:
    "Stay updated with the latest retail industry news, technology innovations, market trends, expert insights, conference highlights, startup stories and event updates from REPAX 2026.",

  keywords: [
    "REPAX",
    "Retail Blog",
    "Retail Industry News",
    "Retail Conference",
    "Retail Technology",
    "Retail Innovation",
    "Retail Trends",
    "Retail Insights",
    "AI in Retail",
    "Retail Events India",
  ],

  alternates: {
    canonical: "https://yourdomain.com/blog",
  },

  openGraph: {
    title: "REPAX Blog | Retail Insights & Industry News",
    description:
      "Explore retail trends, innovation stories, conference updates and expert perspectives.",
    url: "https://yourdomain.com/blog",
    siteName: "REPAX",
    images: [
      {
        url: "/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "REPAX Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "REPAX Blog",
    description:
      "Latest retail industry news, innovation stories, market trends and conference updates.",
    images: ["/images/blog-og.jpg"],
  },
};

export default async function BlogPage() {
  const response = await getBlogs();

  const blogs = response?.data || [];

  const featuredBlog = blogs.find(
  (blog) => blog.status === "Published"
);

  return (
    <main className="bg-white">
      {/* Hero Section */}{" "}
   
      {/* Featured Article */}
      <section className="relative py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <Image
                src="/images/feature.webp"
                alt="Featured Blog"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />

              <div className="flex flex-col justify-center p-10 lg:p-14">
                <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                  Featured Article
                </span>

                <h2 className="text-4xl font-bold text-slate-900">
                  How Technology is Redefining Retail Experiences
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Discover how AI, automation, customer analytics and emerging
                  technologies are transforming retail operations and customer
                  engagement worldwide.
                </p>

                <button className="mt-8 w-fit rounded-full bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blogs */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Latest Articles
            </h2>

            <p className="mt-3 text-slate-600">
              Stay updated with industry news and insights.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs
              .filter((blog) => blog.status === "Published")
              .map((blog) => (
                <article
                  key={blog.id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-7">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                      {blog.category}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      By {blog.author}
                    </p>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {blog.short_description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {new Date(blog.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>

                    <Link
  href={`/blog/${blog.id}`}
  className="font-semibold text-orange-500 hover:text-orange-600"
>
  Read More →
</Link> 
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
