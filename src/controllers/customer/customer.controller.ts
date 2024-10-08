import { Request, Response } from "express"
import { Customer } from "./customer.dto";
import { BASE_IRIS_ROUTE } from "../../config/routes";
import { callApi } from "../../services/iris.service";

export const list = async (req: Request, res: Response) => {
    const { cid } = req.query;
    const resp = await callApi<Customer>(
        `${BASE_IRIS_ROUTE}/manage/customers/list`,
        "get",
        { cid },
        {},
    )
    if (resp.status !== "success") {
        res.status(400).send(resp.message);
    }
    else
        res.send(resp.data);
}

export const get = async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const { cid } = req.query;
    const resp = await callApi<Customer>(
        `${BASE_IRIS_ROUTE}/manage/customers/${customerId}`,
        "get",
        { cid },
        {},
    )
    if (resp.status !== "success") {
        res.status(400).send(resp.message);
    }
    else
        res.send(resp.data);
}
