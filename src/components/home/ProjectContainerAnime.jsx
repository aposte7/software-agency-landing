export default function ProjectContainerAnime({
  img_styling,
  des_styling,
  project = null,
}) {
  return (
    <div className='overflow-hidden py-2'>
      <h2 className='mx-auto w-fit pb-10 text-5xl font-semibold'>
        {project.label}
      </h2>

      {/* Flex container for image and description */}
      <div className='flex h-[calc(100%-100px)] items-center justify-between'>
        {/* Image Container */}
        <div className={`${img_styling} overflow-hidden bg-gray-950`}>
          <img
            className='h-full w-full object-cover'
            src={project.imgUrl}
            alt={`${project.label} Project`}
          />
        </div>

        {/* Description */}
        <p className={`${des_styling} w-52 text-[1.65rem]`}>
          {project.description}
        </p>
      </div>
    </div>
  );
}
