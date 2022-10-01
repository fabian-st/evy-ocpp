import { OutboundOcppCall } from '../../../../common/call';
import { InboundOcppCallResult } from '../../../../common/callresult';

declare type GetConfigurationRequest = OutboundOcppCall<
  'GetConfiguration',
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
