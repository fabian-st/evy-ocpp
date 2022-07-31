import { OutboundOcppCall } from '../OcppCallMessage';
import { InboundOcppCallResult } from '../OcppCallResultMessage';

declare type GetConfigurationRequest = OutboundOcppCall<
  GetConfigurationRequestPayload,
  GetConfigurationResponsePayload,
  GetConfigurationResponse
>;

declare type GetConfigurationRequestPayload = {
  key?: string;
};

declare type GetConfigurationResponse =
  InboundOcppCallResult<GetConfigurationResponsePayload>;

declare type GetConfigurationResponsePayload = {
  configurationKey?: [KeyValue];
  unknownKey?: [string];
};

declare type KeyValue = {
  key: string;
  readonly: boolean;
  value?: string;
};

export { GetConfigurationRequest, GetConfigurationResponse };
