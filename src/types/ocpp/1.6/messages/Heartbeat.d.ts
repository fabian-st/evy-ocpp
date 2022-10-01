import { InboundOcppCall } from '../../../../common/call';
import { OutboundOcppCallResult } from '../../../../common/callresult';

declare type HeartbeatRequest = InboundOcppCall<
  'Heartbeat',
  {},
  HeartbeatResponsePayload,
  HeartbeatResponse
>;

declare type HeartbeatResponse =
  OutboundOcppCallResult<HeartbeatResponsePayload>;

declare type HeartbeatResponsePayload = {
  currentTime: Date;
};

export { HeartbeatRequest, HeartbeatResponse };
