import React from "react";
import { Loader2 } from "lucide-react";

function loading() {
	return (
		<div className="h-screen flex items-center justify-center w-screen">
			<Loader2 className="animate-spin" />
		</div>
	);
}

export default loading;
