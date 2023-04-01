import { Controller, Get, Render } from "@nestjs/common";

@Controller("/")
export class RootController {
	@Get()
	@Render("index")
	root() {
		return {
			message: "The oldest",
		};
	}
}
