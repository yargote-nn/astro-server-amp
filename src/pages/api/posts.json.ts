import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	await new Promise((resolve) => setTimeout(resolve, 100));

	const posts = [
		{
			id: 1,
			title: "Primer Post",
			content: `Contenido generado en el servidor a las ${new Date().toISOString()}`,
		},
		{
			id: 2,
			title: "Segundo Post",
			content: "Otro contenido dinámico del servidor",
		},
	];

	return new Response(JSON.stringify(posts), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
