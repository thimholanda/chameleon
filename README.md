## Suggestions for the engineer who wrote the code

1. Try checking basic things like structures of arrow functions, names of states and functions. I needed to fix this.
2. For the best possible performance, it is not recommended to use functions like "for" inside react components. Instead, it's better to use the "map" function.
3. Each component needs to follow SOLID recommendations. In this case, each component can be separated with a responsibility.
4. The active array must be a state "[active, setActive]" to reflect frontend changes.
5. Instead of using <div> as component to click on, it's better to use anchor "<a>" or "<button>", like I did.
6. To compare dates, you cannot use strings, as you did when using an ISO date format.

## how would you do this differently if you were going to create this component from scratch?

1. What I would do differently is the organization of the files using partern composition. In this way, we can build reusable and well-documented code.
2. I would separate the HTTP request logic, especially if we are using Next, to leverage the server and client components.

Thank you for this moment of knowledge :)

This is the result of the project working with Next Js:


![alt text](https://projects.thim.com.br/test/image.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
