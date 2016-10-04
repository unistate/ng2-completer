import { EventEmitter, OnInit } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { CompleterData } from "./services/completer-data";
import { CompleterItem } from "./completer-item";
import "rxjs/add/operator/catch";
export declare class CompleterCmp implements OnInit, ControlValueAccessor {
    dataService: CompleterData;
    inputName: string;
    pause: number;
    minSearchLength: number;
    maxChars: number;
    overrideSuggested: boolean;
    clearSelected: boolean;
    placeholder: string;
    matchClass: string;
    textSearching: string;
    textNoResults: string;
    fieldTabindex: number;
    autoMatch: boolean;
    disableInput: boolean;
    selected: EventEmitter<CompleterItem>;
    highlighted: EventEmitter<CompleterItem>;
    private completer;
    private displaySearching;
    private searchStr;
    private _onTouchedCallback;
    private _onChangeCallback;
    constructor();
    value: any;
    onTouched(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
}
