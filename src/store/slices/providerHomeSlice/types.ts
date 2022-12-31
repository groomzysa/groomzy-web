import {
  DayType,
  OperatingTime,
  Service,
  Social,
} from "../../../api/graphql/api.schema";
import { SelectOption } from "../../../utils/types";

/**
 *
 * States
 *
 */

export interface IProviderHomeSliceState {
  dayOptions: SelectOption<DayType>[];
  socialOptions: SelectOption<string>[];
  operatingTime?: OperatingTime;
  service?: Service;
  social?: Social;
}

/**
 *
 * Actions
 *
 */

export interface ISetDayOptionsAction {
  type: string;
  payload: {
    dayOptions: SelectOption<DayType>[];
  };
}

export interface ISetSocialOptionsAction {
  type: string;
  payload: {
    socialOptions: SelectOption<string>[];
  };
}

export interface ISetOperatingTimeAction {
  type: string;
  payload: {
    operatingTime?: OperatingTime;
  };
}

export interface ISetServiceAction {
  type: string;
  payload: {
    service?: Service;
  };
}

export interface ISetSocialAction {
  type: string;
  payload: {
    social?: Social;
  };
}
