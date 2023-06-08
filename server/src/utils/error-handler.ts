import { NextFunction, Request, Response } from "express";

function logErrors(
	err: Error,
	_req: Request,
	_res: Response,
	next: NextFunction,
) {
	// TODO: log with some 3rd party logger to monitor
	console.error("error occured", { err });
	next(err);
}

function clientErrorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (req.xhr) {
		res.status(500).send({ error: "Something failed!" });
	} else {
		next(err);
	}
}

function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// TODO handle more effectively
	res.status(500);
}

export const ErrorHandler = { logErrors, clientErrorHandler, errorHandler };
