/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
//declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
//}

type Todo = {
	uid: String;
	created_at: Date;
	text: String;
	done: boolean;
}