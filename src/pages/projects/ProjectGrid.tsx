const projects = [
  {
    id: 1,
    title: 'Sky OS Desktop',
    image: 'path-to-image',
    tags: ['React', 'Redux'],
  },
  {
    id: 2,
    title: 'Rocket.Chat',
    image: 'path-to-image',
    tags: ['NodeJS', 'Meteor'],
  },
  {
    id: 3,
    title: 'Perverte Web Agency',
    image: 'path-to-image',
    tags: ['HTML5', 'CSS3'],
  },
]

export const PortfolioGrid = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.tags.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
