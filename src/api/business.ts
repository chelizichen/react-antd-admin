import type { PageData } from '@/interface';
import type { BuniesssUser } from '@/interface/business';

import { request } from './stockReq';

export const getBusinessUserList = (params: any) =>
  request<PageData<BuniesssUser>>('post', '/v1/quantitative/queryConfs', params);
