
import { authMiddleware } from "@clerk/nextjs";

console.log(process.env.MONGODB_URL)
 
export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks(.*)"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};