# Python 베이스 이미
FROM python:3.10-slim

# 작업 디렉토리 설정
WORKDIR /app

# 코드 복사
COPY . .

# 패키지 설치
RUN pip install --no-cache-dir -r requirements.txt

# 서버 실행
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]