import { ApiProperty } from '@nestjs/swagger';

export class AddNoteRequest {
  @ApiProperty()
  notebook_id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  tags: [];
}

export class UpdateNoteRequest {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}

export class DeleteNoteRequest {}

export class GetNoteRequest {}
