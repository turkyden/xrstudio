export default function IndexPage() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-8 wrap">
        {[1, 2].map(() => (
          <div className="col-1 group rounded-xl">
            <div className="overflow-hidden rounded-xl ring-blue-500 group-hover:ring-4 transition">
              <img
                className="w-full transform group-hover:scale-110 transition"
                src="https://filespreview.spline.design/11056099-fc3b-434d-90db-b79efebb568e.jpg"
                alt=""
              />
            </div>
            <div className="py-2">
              <div>Unititled</div>
              <div className="text-gray-500">Edit 3days ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
