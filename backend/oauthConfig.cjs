module.exports = {
	defaults: {
		origin: process.env.NEXT_PUBLIC_BACKEND_SERVER || "http://localhost:8000",
		transport: "session",
		state: true,
	},
	google: {
		key: "...",
		secret: "...",
		scope: ["openid"],
		nonce: true,
		custom_params: { access_type: "offline" },
		callback: "/v1/auth/google/callback",
	},
	twitter: {
		key: "...",
		secret: "...",
		callback: "/v1/auth/twitter/callback",
	},
	twitch: {
		clientId: process.env.CLIENT_ID || "",
		clientSecret: process.env.CLIENT_SECRET || "",
		redirectURI: "/v1/auth/twitter/callback",
		scopes: [
			"user:edit:broadcast", // for streamers,  we could use this scope to automatically set a description of allowed users into the mc server
			"channel:read:vips", // for streamers, check if a user is a vip
			"user:read:email", // for everyone, we love to collect data to sell to big data
			"user:read:follows", // for everyone, check if a user is following
			"moderator:read:chatters", // for streamers, check if a user is in the chat
			"channel:read:subscriptions", // for streamers, check if a user is subscribed
			"moderation:read", // for streamers, check if a user is a moderator or banned
			"viewing_activity_read", // for streamers, check if a user is watching
			"moderator:read:followers", // for streamers, check if a user is following
		],
	},
	github: {
		key: "...",
		secret: "...",
		scope: ["public_repo"],
		callback: "/hello",
		overrides: {
			notifications: {
				key: "...",
				secret: "...",
				scope: ["notifications"],
			},
			all: {
				scope: ["repo", "gist", "user"],
				callback: "/hey",
			},
		},
	},
};
