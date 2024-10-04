type MyProjectsProps = {};

export default function MyProjects({}: MyProjectsProps) {
  return (
    <div className="m-5 flex max-sm:flex-col">
      <div className="flex gap-5 flex-col">
        <h1 className="text-xl">My projects</h1>
        <p>
          Since my programming jurney has begun, I've created a lots of
          different projects in various different languages.
        </p>
        <p>
          Most of them are lost somewhere in the dark place of my disks, but i
          will share with you with those i could find!
        </p>
      </div>
    </div>
  );
}
