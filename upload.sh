aws s3 cp . s3://inse9-co-uk/ --recursive --exclude "*.md" --exclude "*.sh" --exclude "*.lock" --exclude "package.json" --exclude ".git/*" --exclude "node_modules/*" --exclude ".gitignore" --exclude ".DS_Store" --exclude ".idea/*"
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E1ENYSQ53KB62P --paths "/*"