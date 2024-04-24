import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/">
        <h1 className="text-4xl">Gilbert Iowa Tee Ball Blue Team</h1>
      </div>
      <h2 className="text-3xl mt-12">Team</h2>

      {/* <h2 className="text-3xl mt-12">Practice Schedule</h2>
      <div className="flex flex-wrap gap-16">
        <div className="flex flex-col">
          <h3 className="text-xl">Week 1 </h3>
          <div>Monday May 15th, 6:00pm - 7:00pm, field 5</div>
          <div>Wednesday May 18th, 4:00pm - 5:00pm, field 5</div>
        </div>

        <div className="flex flex-col mt-6">
          <h3 className="text-lg">Week 2</h3>
          <div>Monday May 22th, 5:00pm - 6:00pm, field 5</div>
        </div>

        <div className="flex flex-col mt-6">
          <h3 className="text-lg">Week 3</h3>
          <div>Tuesday May 30th, 6:00pm - 7:00pm, field 4</div>
        </div>
      </div> */}
      <h2 className="text-3xl mt-12">Games Schedule</h2>
      <div className="flex flex-wrap gap-16">
        <div className="flex flex-col mt-6">
          <h3 className="text-xl">Week 1 </h3>
          <div>Monday Jun 3rd, 6:30, field 3</div>
          <div>Wednesday Jun 5th, 5:30, field 5</div>
        </div>
        <div className="flex flex-col mt-6">
          <h3 className="text-xl">Week 2 </h3>
          <div>Monday Jun 10th, Bye</div>
          <div>Wednesday Jun 12th, 6:30, field 5</div>
        </div>
        <div className="flex flex-col mt-6">
          <h3 className="text-xl">Week 3</h3>
          <div>Monday Jun 17th, 5:30, field 3</div>
          <div>Wednesday Jun 19th, 5:30, field 5</div>
        </div>
        <div className="flex flex-col mt-6">
          <h3 className="text-xl">Week 4</h3>
          <div>Wednesday Jun 24th, 5:30, field 3</div>
        </div>
      </div>
      <h2 className="text-3xl mt-12">Resource Link</h2>
      <a
        className="text-indigo-500"
        href="https://docs.google.com/document/d/1TFpftFJJsr-rJk_x8bYiyx4mF1t3qLpLusQuN-XAFTo/edit">
        Google Doc with more general information
      </a>
    </main>
  );
}
