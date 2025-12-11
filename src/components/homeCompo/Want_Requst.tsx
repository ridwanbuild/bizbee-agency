export default function Want_Request() {
  return (
    <div>



      <h2 className="text-xl font-semibold mb-3">Send Your Request</h2>

      <p className="text-sm text-muted-foreground mb-4">
        Fill in your information below.
      </p>

      {/* example input */}
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border rounded-md"
      />

      <button className="mt-4 px-4 py-2 w-full bg-black text-white rounded-md">
        Submit
      </button>

    </div>
  );
}
