from __future__ import annotations

from fastapi import HTTPException, WebSocketException, status
from starlette.requests import HTTPConnection


class InvalidRequestHttp(HTTPException):
    """HTTP exception for malformed/invalid requests"""

    def __init__(self, detail: str) -> None:
        super().__init__(
            status_code=status.HTTP_400_BAD_REQUEST, detail={"error": "invalid_request", "message": detail}
        )


class InvalidRequestWebSocket(WebSocketException):
    """WebSocket exception for malformed/invalid requests"""

    def __init__(self, detail: str) -> None:
        super().__init__(
            code=status.WS_1008_POLICY_VIOLATION, reason=str({"error": "invalid_request", "message": detail})
        )


class UnauthorizedHttp(HTTPException):
    """HTTP exception for authentication failures"""

    def __init__(self, detail: str) -> None:
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"error": "invalid_token", "message": detail},
            headers={"WWW-Authenticate": "Bearer"},
        )


class UnauthorizedWebSocket(WebSocketException):
    """WebSocket exception for authentication failures"""

    def __init__(self, detail: str) -> None:
        super().__init__(
            code=status.WS_1008_POLICY_VIOLATION, reason=str({"error": "invalid_token", "message": detail})
        )


class ForbiddenHttp(HTTPException):
    """HTTP exception for insufficient permissions"""

    def __init__(self, detail: str) -> None:
        super().__init__(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"error": "insufficient_scope", "message": detail},
            headers={"WWW-Authenticate": "Bearer"},
        )


class ForbiddenWebSocket(WebSocketException):
    """WebSocket exception for insufficient permissions"""

    def __init__(self, detail: str) -> None:
        super().__init__(
            code=status.WS_1008_POLICY_VIOLATION, reason=str({"error": "insufficient_scope", "message": detail})
        )


def InvalidRequest(detail: str, request: HTTPConnection) -> InvalidRequestHttp | InvalidRequestWebSocket:
    """Factory function for invalid request exceptions (HTTP only, as request validation happens pre-connection)"""
    if request.scope['type'] == 'http':
        return InvalidRequestHttp(detail)
    return InvalidRequestWebSocket(detail)


def Unauthorized(detail: str, request: HTTPConnection) -> UnauthorizedHttp | UnauthorizedWebSocket:
    """Factory function for unauthorized exceptions"""
    if request.scope["type"] == "http":
        return UnauthorizedHttp(detail)
    return UnauthorizedWebSocket(detail)


def Forbidden(detail: str, request: HTTPConnection) -> ForbiddenHttp | ForbiddenWebSocket:
    """Factory function for forbidden exceptions"""
    if request.scope["type"] == "http":
        return ForbiddenHttp(detail)
    return ForbiddenWebSocket(detail)
