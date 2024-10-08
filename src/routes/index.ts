import { Application } from 'express';
import caseRoutes from "../routes/case.route";
import customerRoutes from "../routes/customer.route";
import { CASE_ROUTE, CUSTOMER_ROUTE } from '../config/routes';

export const configureRouting = (app: Application) => {
  app.use(CASE_ROUTE, caseRoutes);
  app.use(CUSTOMER_ROUTE, customerRoutes);
};
