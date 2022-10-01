import { OutboundOcppCall } from '../../../../common/call';
import { InboundOcppCallResult } from '../../../../common/callresult';
import RemoteStartStopStatus from '../structs/RemoteStartStopStatus';

declare type RemoteStopTransactionRequest = OutboundOcppCall<
  'RemoteStopTransaction',
  RemoteStopTransactionRequestPayload,
  RemoteStopTransactionResponsePayload,
  RemoteStopTransationResponse
>;

declare type RemoteStopTransactionRequestPayload = {
  transactionId: number;
};

declare type RemoteStopTransationResponse =
  InboundOcppCallResult<RemoteStopTransactionResponsePayload>;

declare type RemoteStopTransactionResponsePayload = {
  status: RemoteStartStopStatus;
};

export { RemoteStopTransactionRequest, RemoteStopTransationResponse };
