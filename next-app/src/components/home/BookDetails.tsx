import StarIcon from "@/assets/icons/star.svg";
import { BOOK_DETAILS } from "@/static/home/8-bookDetails";
import Image from "next/image";

export const BookDetails = () => {
  const hasCurrentReads = BOOK_DETAILS.currentlyReading.length > 0;
  const hasEarlierReads = BOOK_DETAILS.earlierReads.length > 0;
  const hasAnyBooks = hasCurrentReads || hasEarlierReads;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-6 md:py-8 md:px-10 items-center">
        <div className="inline-flex items-center justify-center gap-2">
          <StarIcon className="size-9 text-emerald-300" />
          <h3 className="font-serif text-3xl">{BOOK_DETAILS.sectionHeader}</h3>
        </div>
        <p className="lg:text-base text-sm max-w-lg text-white/60 mt-2 leading-relaxed text-center mx-auto">
          {BOOK_DETAILS.sectionDescription}
        </p>
      </div>
      {!hasAnyBooks ? (
        <div className="px-6 md:px-10 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center text-white/70">
            {BOOK_DETAILS.placeholder}
          </div>
        </div>
      ) : (
        <>
          {/* Currently Reading */}
          {hasCurrentReads && (
            <section className="px-6 md:px-10 mb-10">
              <h4 className="font-serif text-2xl mb-4 py-4 text-center">
                Currently Reading
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {BOOK_DETAILS.currentlyReading.map((book, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center max-w-[150px]"
                  >
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={200}
                      height={220}
                      className="w-full h-[220px] object-cover rounded-lg shadow-md"
                    />
                    <h5 className="mt-3 font-medium text-sm">{book.title}</h5>
                    <p className="text-xs text-white/60">{book.author}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Earlier Read This Year */}
          {hasEarlierReads && (
            <section className="px-6 md:px-10 mb-12">
              <h4 className="font-serif text-2xl mb-4 pb-4 text-center">
                Earlier Read
              </h4>
              <div className="grid grid-cols-2  md:grid-cols-4 gap-6 justify-items-center">
                {BOOK_DETAILS.earlierReads.map((book, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center max-w-[150px]"
                  >
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={180}
                      height={220}
                      className="w-full h-[220px] object-cover rounded-lg shadow-md"
                    />
                    <h5 className="mt-3 font-medium text-sm">{book.title}</h5>
                    <p className="text-xs text-white/60">{book.author}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};
