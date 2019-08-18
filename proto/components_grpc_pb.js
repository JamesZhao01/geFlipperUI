// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var components_pb = require('./components_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_ApiRequest(arg) {
  if (!(arg instanceof components_pb.ApiRequest)) {
    throw new Error('Expected argument of type ApiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ApiRequest(buffer_arg) {
  return components_pb.ApiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ApiStatus(arg) {
  if (!(arg instanceof components_pb.ApiStatus)) {
    throw new Error('Expected argument of type ApiStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ApiStatus(buffer_arg) {
  return components_pb.ApiStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommandControlService = exports.CommandControlService = {
  apiGet: {
    path: '/CommandControl/apiGet',
    requestStream: false,
    responseStream: false,
    requestType: components_pb.ApiRequest,
    responseType: components_pb.ApiStatus,
    requestSerialize: serialize_ApiRequest,
    requestDeserialize: deserialize_ApiRequest,
    responseSerialize: serialize_ApiStatus,
    responseDeserialize: deserialize_ApiStatus,
  },
};

exports.CommandControlClient = grpc.makeGenericClientConstructor(CommandControlService);
