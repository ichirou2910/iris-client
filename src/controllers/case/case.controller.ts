import { Request, Response } from "express"
import { Case } from "./case.dto";
import { BASE_IRIS_ROUTE } from "../../config/routes";
import { callApi } from "../../services/iris.service";

export const list = async (req: Request, res: Response) => {
    const resp = await callApi<Case>(
        `${BASE_IRIS_ROUTE}/manage/cases/list`,
        "get",
        {},
        {},
    )
    if (resp.status !== "success") {
        res.status(400).send(resp.message);
    }
    else
        res.send(resp.data);
}
