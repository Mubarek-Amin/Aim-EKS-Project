resource "aws_s3_bucket" "aim_bucket" {
  bucket = "aim-bucket-eks"
  

}
resource "aws_ecr_repository" "aim_ecr"{
    name = "aim-repo"
    image_tag_mutability = false
}