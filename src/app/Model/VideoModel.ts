export class DataShow {
    VideoProfileId: string;
    VideoId: string;
    Name: string;
    Resolution: string;
    AspectRatio: string;
    Duration: number;
    PhysicalFilePath: string;
    VideoCodec: string;
    CreatedByUserId: string;
    IsDefaultProfile: boolean;
    Order: number;
}
export class DataAPI {
    Data: DataShow;
    TotalCount: number;
    DataCount: number;
    Status: number;
    Message: string;
}