import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  order_time: yup.date().required(),
  special_request: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
