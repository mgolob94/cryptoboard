import { createRouter } from "next-connect";

function onError(err, req, res, next) {
  console.error(err);
  res.status(500).end(err.toString());
}

const router = createRouter();

export default router.handler({
  onError: (err, req, event) => {
    console.error(err.stack);
    return new NextResponse("Something broke!", {
      status: err.statusCode || 500,
    });
  },
});
