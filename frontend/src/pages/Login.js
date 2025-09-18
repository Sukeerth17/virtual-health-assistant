"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Login = function (_a) {
    var onLogin = _a.onLogin;
    var _b = (0, react_1.useState)(''), phoneNumber = _b[0], setPhoneNumber = _b[1];
    var _c = (0, react_1.useState)(''), otp = _c[0], setOtp = _c[1];
    var _d = (0, react_1.useState)(false), otpSent = _d[0], setOtpSent = _d[1];
    var _e = (0, react_1.useState)(''), message = _e[0], setMessage = _e[1];
    var handleRequestOtp = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/auth/request-otp', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ phoneNumber: phoneNumber }),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (response.ok) {
                        setOtpSent(true);
                        setMessage(data.message);
                    }
                    else {
                        setMessage(data.message);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setMessage('Failed to send OTP. Please try again.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleVerifyOtp = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/auth/verify-otp', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ phoneNumber: phoneNumber, otp: otp }),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (response.ok) {
                        onLogin();
                    }
                    else {
                        setMessage(data.message);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    setMessage('Failed to verify OTP. Please try again.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
                {!otpSent ? (<div className="space-y-4">
                        <input type="text" value={phoneNumber} onChange={function (e) { return setPhoneNumber(e.target.value); }} placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <button onClick={handleRequestOtp} className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Request OTP
                        </button>
                    </div>) : (<div className="space-y-4">
                        <p className="text-center text-gray-600">Enter the OTP sent to your phone.</p>
                        <input type="text" value={otp} onChange={function (e) { return setOtp(e.target.value); }} placeholder="Enter OTP" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <button onClick={handleVerifyOtp} className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200">
                            Verify OTP
                        </button>
                    </div>)}
                {message && <p className="text-center text-red-500 mt-4">{message}</p>}
            </div>
        </div>);
};
exports.default = Login;
