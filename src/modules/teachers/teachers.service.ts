import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from '@/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TeachersService {
  constructor(
    private prisma: PrismaService
  ) { }

  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  async findAll(current: number, pageSize: number, classId?: number, search = "") {
    current = Math.max(current || 1, 1);
    pageSize = Math.max(pageSize || 10, 1);

    const whereCondition: Prisma.TeacherWhereInput = {
      OR: [
        { name: { contains: search } },
        ...(classId ? [{ lessons: { some: { classId } } }] : [])
      ]
    };

    const [data, count] = await this.prisma.$transaction([
      this.prisma.teacher.findMany({
        take: pageSize,
        skip: (current - 1) * pageSize,
        include: {
          subjects: true,
          classes: true
        },
        where: whereCondition
      }),
      this.prisma.teacher.count({ where: whereCondition })
    ]);

    return {
      meta: {
        current,
        pageSize,
        totalPages: Math.ceil(count / pageSize),
        count
      },
      result: data
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
