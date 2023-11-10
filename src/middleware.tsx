import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const { pathname } = request.url;

  // Check if the user is trying to access a protected route
  if (
    pathname.startsWith("/about/aboutstudent/") ||
    pathname.startsWith("/dashboard/")
  ) {
    // Check if the user has a valid access token (you need to implement this logic)
    const hasAccessToken = checkAccessToken(); // Implement this function

    // If the user doesn't have a valid access token, redirect to the login page
    if (!hasAccessToken) {
      return NextResponse.redirect(new URL("/Login", request.url));
    }
  }

  // If the user has a valid access token or is not accessing a protected route, continue with the request
  return NextResponse.next();
};

export const config = {
  matcher: ["/about/aboutstudent/:path*", "/dashboard/:path*"],
};

// Implement your logic to check if the user has a valid access token
const checkAccessToken = () => {
  // Replace this with your actual logic to check the access token
  const accessToken = getAccessTokenFromSomewhere(); // Implement this function
  return Boolean(accessToken);
};

// Implement your logic to get the access token from somewhere (e.g., from cookies, headers, etc.)
const getAccessTokenFromSomewhere = () => {
  // Replace this with your actual logic to retrieve the access token
  // For example, you might get it from cookies, headers, etc.
};
