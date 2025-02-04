/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface RoundsManagerInterface extends utils.Interface {
  functions: {
    "setRoundLockAmount(uint256)": FunctionFragment;
    "lastRoundLengthUpdateRound()": FunctionFragment;
    "currentRoundInitialized()": FunctionFragment;
    "blockHashForRound(uint256)": FunctionFragment;
    "targetContractId()": FunctionFragment;
    "lastRoundLengthUpdateStartBlock()": FunctionFragment;
    "setRoundLength(uint256)": FunctionFragment;
    "currentRoundLocked()": FunctionFragment;
    "blockHash(uint256)": FunctionFragment;
    "lastInitializedRound()": FunctionFragment;
    "currentRound()": FunctionFragment;
    "blockNum()": FunctionFragment;
    "roundLength()": FunctionFragment;
    "currentRoundStartBlock()": FunctionFragment;
    "setController(address)": FunctionFragment;
    "initializeRound()": FunctionFragment;
    "roundLockAmount()": FunctionFragment;
    "controller()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "setRoundLockAmount"
      | "lastRoundLengthUpdateRound"
      | "currentRoundInitialized"
      | "blockHashForRound"
      | "targetContractId"
      | "lastRoundLengthUpdateStartBlock"
      | "setRoundLength"
      | "currentRoundLocked"
      | "blockHash"
      | "lastInitializedRound"
      | "currentRound"
      | "blockNum"
      | "roundLength"
      | "currentRoundStartBlock"
      | "setController"
      | "initializeRound"
      | "roundLockAmount"
      | "controller"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "setRoundLockAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lastRoundLengthUpdateRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentRoundInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockHashForRound",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "targetContractId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRoundLengthUpdateStartBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRoundLength",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRoundLocked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockHash",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lastInitializedRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentRound",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "blockNum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "roundLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentRoundStartBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "roundLockAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "setRoundLockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRoundLengthUpdateRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRoundInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockHashForRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetContractId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRoundLengthUpdateStartBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoundLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRoundLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "blockHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastInitializedRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "blockNum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "roundLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRoundStartBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "roundLockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;

  events: {
    "NewRound(uint256,bytes32)": EventFragment;
    "SetController(address)": EventFragment;
    "ParameterUpdate(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdate"): EventFragment;
}

export interface NewRoundEventObject {
  round: BigNumber;
  blockHash: string;
}
export type NewRoundEvent = TypedEvent<
  [BigNumber, string],
  NewRoundEventObject
>;

export type NewRoundEventFilter = TypedEventFilter<NewRoundEvent>;

export interface SetControllerEventObject {
  controller: string;
}
export type SetControllerEvent = TypedEvent<[string], SetControllerEventObject>;

export type SetControllerEventFilter = TypedEventFilter<SetControllerEvent>;

export interface ParameterUpdateEventObject {
  param: string;
}
export type ParameterUpdateEvent = TypedEvent<
  [string],
  ParameterUpdateEventObject
>;

export type ParameterUpdateEventFilter = TypedEventFilter<ParameterUpdateEvent>;

export interface RoundsManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoundsManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    setRoundLockAmount(
      _roundLockAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lastRoundLengthUpdateRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentRoundInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    blockHashForRound(
      _round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    targetContractId(overrides?: CallOverrides): Promise<[string]>;

    lastRoundLengthUpdateStartBlock(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setRoundLength(
      _roundLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentRoundLocked(overrides?: CallOverrides): Promise<[boolean]>;

    blockHash(
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lastInitializedRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    blockNum(overrides?: CallOverrides): Promise<[BigNumber]>;

    roundLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentRoundStartBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initializeRound(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    roundLockAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    controller(overrides?: CallOverrides): Promise<[string]>;
  };

  setRoundLockAmount(
    _roundLockAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lastRoundLengthUpdateRound(overrides?: CallOverrides): Promise<BigNumber>;

  currentRoundInitialized(overrides?: CallOverrides): Promise<boolean>;

  blockHashForRound(
    _round: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  targetContractId(overrides?: CallOverrides): Promise<string>;

  lastRoundLengthUpdateStartBlock(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setRoundLength(
    _roundLength: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentRoundLocked(overrides?: CallOverrides): Promise<boolean>;

  blockHash(
    _block: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  lastInitializedRound(overrides?: CallOverrides): Promise<BigNumber>;

  currentRound(overrides?: CallOverrides): Promise<BigNumber>;

  blockNum(overrides?: CallOverrides): Promise<BigNumber>;

  roundLength(overrides?: CallOverrides): Promise<BigNumber>;

  currentRoundStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

  setController(
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initializeRound(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  roundLockAmount(overrides?: CallOverrides): Promise<BigNumber>;

  controller(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    setRoundLockAmount(
      _roundLockAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    lastRoundLengthUpdateRound(overrides?: CallOverrides): Promise<BigNumber>;

    currentRoundInitialized(overrides?: CallOverrides): Promise<boolean>;

    blockHashForRound(
      _round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    targetContractId(overrides?: CallOverrides): Promise<string>;

    lastRoundLengthUpdateStartBlock(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRoundLength(
      _roundLength: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    currentRoundLocked(overrides?: CallOverrides): Promise<boolean>;

    blockHash(
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    lastInitializedRound(overrides?: CallOverrides): Promise<BigNumber>;

    currentRound(overrides?: CallOverrides): Promise<BigNumber>;

    blockNum(overrides?: CallOverrides): Promise<BigNumber>;

    roundLength(overrides?: CallOverrides): Promise<BigNumber>;

    currentRoundStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeRound(overrides?: CallOverrides): Promise<void>;

    roundLockAmount(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewRound(uint256,bytes32)"(
      round?: PromiseOrValue<BigNumberish> | null,
      blockHash?: null
    ): NewRoundEventFilter;
    NewRound(
      round?: PromiseOrValue<BigNumberish> | null,
      blockHash?: null
    ): NewRoundEventFilter;

    "SetController(address)"(controller?: null): SetControllerEventFilter;
    SetController(controller?: null): SetControllerEventFilter;

    "ParameterUpdate(string)"(param?: null): ParameterUpdateEventFilter;
    ParameterUpdate(param?: null): ParameterUpdateEventFilter;
  };

  estimateGas: {
    setRoundLockAmount(
      _roundLockAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lastRoundLengthUpdateRound(overrides?: CallOverrides): Promise<BigNumber>;

    currentRoundInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    blockHashForRound(
      _round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetContractId(overrides?: CallOverrides): Promise<BigNumber>;

    lastRoundLengthUpdateStartBlock(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRoundLength(
      _roundLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentRoundLocked(overrides?: CallOverrides): Promise<BigNumber>;

    blockHash(
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastInitializedRound(overrides?: CallOverrides): Promise<BigNumber>;

    currentRound(overrides?: CallOverrides): Promise<BigNumber>;

    blockNum(overrides?: CallOverrides): Promise<BigNumber>;

    roundLength(overrides?: CallOverrides): Promise<BigNumber>;

    currentRoundStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initializeRound(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    roundLockAmount(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    setRoundLockAmount(
      _roundLockAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lastRoundLengthUpdateRound(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRoundInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockHashForRound(
      _round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    targetContractId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRoundLengthUpdateStartBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRoundLength(
      _roundLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentRoundLocked(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockHash(
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastInitializedRound(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roundLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentRoundStartBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initializeRound(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    roundLockAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
