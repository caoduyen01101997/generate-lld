# Sử dụng một hình ảnh Node.js để build ứng dụng React
FROM node:14 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Sử dụng hình ảnh Nginx nhẹ để chứa ứng dụng build
FROM nginx:alpine

# Sao chép các tệp tin từ builder stage (ứng dụng đã được build)
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx sẽ chạy trên cổng 80
EXPOSE 80

# Lệnh để khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]
