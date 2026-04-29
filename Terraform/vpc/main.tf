resource "aws_vpc" "aim_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {

    Name = "gatus_vpc"
  }

}

resource "aws_subnet" "priv"{
    vpc_id = aws_vpc.aim_vpc.id
    cidr_block = 
}
resource "aws_subnet" "pub"{
    vpc_id = aws_vpc.aim_vpc.id
    cidr_block = 
}

resource "aws_route_table" "priv_route" {
  vpc_id = aws_vpc.aim_vpc.id
  route = {

  }
}

resource "aws_route_table" "pub_route" {
  vpc_id = aws_vpc.aim_vpc.id
}