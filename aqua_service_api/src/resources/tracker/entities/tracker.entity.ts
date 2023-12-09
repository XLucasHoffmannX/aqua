import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'trackers' })
export class Tracker {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 60, nullable: false })
  name: string;

  @Column({ name: 'description', length: 60, nullable: true })
  description: string;

  @Column({ name: 'lat', length: 60, nullable: false })
  lat: string;

  @Column({ name: 'lng', length: 60, nullable: false })
  lng: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  upadteAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
